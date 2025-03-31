# Contributing to Rails FactoryBot Navigator

Thank you for your interest in contributing to Rails FactoryBot Navigator! This document provides guidelines and steps for contributing.

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Build the extension:
   ```bash
   npm run compile
   ```
4. Press F5 in VSCode to start debugging

## Making Changes

1. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Run tests:
   ```bash
   npm test
   ```
4. Run linting:
   ```bash
   npm run lint
   ```
5. Commit your changes with a descriptive message

## Pull Request Process

1. Update the CHANGELOG.md with your changes
2. Ensure all tests pass, if any
3. Submit a pull request with a clear description of your changes

## Code Style

- Follow the existing TypeScript code style
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

## Testing

- Add tests for new features
- Ensure existing tests pass
- Test with different Ruby project structures

## Questions?

Feel free to open an issue if you have any questions or need clarification.
