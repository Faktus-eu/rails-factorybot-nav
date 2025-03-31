import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    // Get configuration
    const config = vscode.workspace.getConfiguration('railsFactoryBotNav');
    const customFactoryPath = config.get<string>('customFactoryPath') || 'spec/factories';

    // Register the definition provider
    const definitionProvider = vscode.languages.registerDefinitionProvider('ruby', {
        async provideDefinition(document: vscode.TextDocument, position: vscode.Position) {
            try {
                // Only provide definitions for spec files
                if (!document.fileName.endsWith('_spec.rb')) {
                    return null;
                }

                const line = document.lineAt(position.line);
                const text = line.text;

                // Match FactoryBot factory usage patterns
                const factoryPattern = /(?:create|build|build_stubbed)\(:(\w+)(?:,\s*[^)]*?)?\)/;
                const match = text.match(factoryPattern);

                if (match) {
                    const factoryName = match[1];
                    const workspaceFolders = vscode.workspace.workspaceFolders;

                    if (!workspaceFolders) {
                        vscode.window.showErrorMessage('No workspace folder found');
                        return null;
                    }

                    const rootPath = workspaceFolders[0].uri.fsPath;
                    const factoryPath = path.join(rootPath, customFactoryPath, `${factoryName}s.rb`);

                    if (fs.existsSync(factoryPath)) {
                        return new vscode.Location(
                            vscode.Uri.file(factoryPath),
                            new vscode.Position(0, 0)
                        );
                    } else {
                        vscode.window.showWarningMessage(`Factory file not found at: ${factoryPath}`);
                        return null;
                    }
                }

                return null;
            } catch (error: unknown) {
                const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
                vscode.window.showErrorMessage(`Error navigating to factory: ${errorMessage}`);
                return null;
            }
        }
    });

    // Add providers to subscriptions
    context.subscriptions.push(definitionProvider);
}

export function deactivate() {}
