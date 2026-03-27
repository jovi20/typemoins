# Security Policy

## Reporting a Vulnerability

Please report security vulnerabilities through GitHub Security Advisories:

<https://github.com/jovi20/typemoins/security/advisories/new>

Do not open a public issue for security vulnerabilities.

Your report should include:

- A descriptive title
- Severity assessment
- Affected component or feature
- Steps to reproduce
- Impact description

We will acknowledge valid reports as quickly as possible and coordinate remediation updates through GitHub Security Advisories.

## Security Model

Typemoins stores API keys locally via `tauri-plugin-store`.

- API keys stay on the user's machine unless the user sends them to a configured provider
- Audio is sent directly to the selected STT provider
- LLM requests are sent directly to the configured provider or base URL
- The application does not collect telemetry or usage data
- CSP is enabled in the Tauri webview

## Out of Scope

The following are not considered vulnerabilities:

- Prompt injection in LLM responses where no security boundary is crossed
- Users exposing their own API keys through misconfiguration
- Issues requiring physical access to the user's machine
- Vulnerabilities in third-party STT or LLM provider APIs
