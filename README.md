# Typemoins

Open-source desktop AI voice input for people who want to speak naturally and get clean text in any app.

Hold a hotkey, talk, and Typemoins will transcribe your speech, optionally polish it with an LLM, and send the result to your current application through keyboard simulation or the clipboard.

## Features

- Global hotkey recording with hold-to-talk or toggle mode
- Floating capsule widget for recording and processing status
- Multiple STT providers, including Deepgram, AssemblyAI, OpenAI Whisper, Groq Whisper, GLM-ASR, and SiliconFlow
- Multiple LLM providers, including OpenAI, DeepSeek, Gemini, Claude-compatible endpoints, Ollama, OpenRouter, and more
- Streaming text output while the model responds
- Keyboard simulation or clipboard output
- Translation mode with multiple target languages
- Custom dictionary for proper nouns and domain-specific terms
- Local history with search
- Per-app formatting context
- Light, dark, and system theme support
- Auto-start on login

## Download

Use a packaged desktop build from the repository releases page, or build from source locally:

- Releases: <https://github.com/jovi20/typemoins/releases>
- Build output directory: `src-tauri/target/release/bundle/`

## Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [Rust](https://rustup.rs/) stable toolchain
- Platform-specific Tauri dependencies: [Tauri Prerequisites](https://v2.tauri.app/start/prerequisites/)

## Getting Started

```bash
npm install
npm run tauri dev
```

To build a production bundle:

```bash
npm run tauri build
```

Build artifacts are written to `src-tauri/target/release/bundle/`.

## Configuration

All runtime settings are managed inside the app:

- Speech recognition provider and API key
- LLM provider, model, and base URL
- Hotkey mode and output mode
- Translation target language
- Custom dictionary entries

API keys are stored locally on your device. Requests go directly to the provider or base URL you configure.

## Architecture

Data flow:

```text
Microphone -> Audio Capture -> STT Service -> Transcript -> LLM Polish -> Keyboard/Clipboard Output
```

Architecture summary:

```text
src/                       React frontend (TypeScript)
src/components/            Settings, history, capsule, onboarding, layout
src/lib/                   Shared constants, routing, Tauri bridge helpers
src/stores/                Zustand application state
src-tauri/src/             Rust backend
src-tauri/src/stt/         STT provider integrations
src-tauri/src/llm/         LLM provider integrations
src-tauri/src/output/      Keyboard and clipboard output
src-tauri/src/storage/     Configuration, history, dictionary storage
src-tauri/src/pipeline.rs  Recording -> STT -> LLM -> output orchestration
docs/images/               Screenshots and demo assets
```

## Development

Useful commands:

```bash
npm run test
npm run build
npm run lint
```

## License

[MIT](LICENSE)
