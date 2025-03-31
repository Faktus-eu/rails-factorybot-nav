# Rails FactoryBot Navigator

A VSCode extension that enables navigation to FactoryBot factory definitions with Ctrl+Click.

## Features

- Ctrl+Click on FactoryBot factory usages to jump to their definitions
- Supports `create`, `build`, and `build_stubbed` factory methods

## Usage

1. Open a Ruby file containing FactoryBot factory usages
2. Hover over a factory usage (e.g., `create(:user)`)
3. Hold Ctrl and click on the factory name

The extension will open the corresponding factory definition file in `spec/factories/`.

## Example

```ruby
# In your spec file
let(:user) { create(:user) }
```

Ctrl+Clicking on `:user` will take you to `spec/factories/users.rb`.

## Installation

1. Clone this repository
2. Run `npm install` in the extension directory
3. Run `npm run compile` to build the extension
4. Press F5 in VSCode to start debugging the extension
5. Open a Ruby project with FactoryBot factories
6. The extension will automatically activate when you open Ruby files

## Requirements

- VSCode 1.80.0 or higher
- Node.js and npm installed
- A Ruby project using FactoryBot
