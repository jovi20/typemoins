# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.0] - 2026-02-26

### Added
- Initial open-source release under MIT license
- Global hotkey voice recording with hold-to-record and toggle modes
- Floating capsule widget with recording, transcribing, and polishing states
- 6 STT providers: Deepgram Nova-3, AssemblyAI, OpenAI Whisper, Groq Whisper, GLM-ASR, SiliconFlow
- 11 LLM providers: OpenAI, DeepSeek, Zhipu, Claude, Gemini, Moonshot, Qwen, Groq, Ollama, OpenRouter, SiliconFlow
- Real-time streaming keyboard output
- Clipboard output mode as an alternative to keyboard simulation
- Selected text context for improved LLM prompts
- Translation mode with multiple target languages
- Custom dictionary for domain-specific terms and proper nouns
- Per-app detection for formatting context
- Local history with full-text search and date grouping
- Dark, light, and system theme support
- Onboarding wizard for first-time setup
- System tray with quick actions
- Auto-start on login
- Direct provider API key configuration for STT and LLM services
- Cross-platform support: Windows, macOS, Linux
- CI/CD with automated builds for all three platforms
