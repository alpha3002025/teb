# Implementation Plan: Gemini CLI Skill 'teb' (text-extracting-briefing)

## 1. Project Overview
The `teb` skill is designed to handle text extraction and content briefing from visual media, specifically PPT slides and PDF page images. It leverages the power of Gemini's multimodal capabilities to process images and generate structured output.

## 2. Core Features
### (1) `ppt-slides`
- **Purpose**: Extract text or summarize content from PPT slide images.
- **Modes**:
    - `--extracting`: Direct OCR and transcription of slides.
    - `--briefing`: Summarizing key points and providing insights.
- **Input**: Individual PNG/JPG files or directories containing slide images.

### (2) `pdf-images`
- **Purpose**: Extract text or summarize content from book or document page images.
- **Modes**:
    - `--extracting`: Precise text extraction from pages.
    - `--briefing`: Structured summary of the page contents.
- **Input**: Individual PNG/JPG files or directories containing page images.

## 3. Command Design
The CLI command structure will be:
```bash
/teb:<sub-command> [--extracting | --briefing] --output-format <format> <input_paths...>
```
- `<sub-command>`: `ppt-slides` or `pdf-images`.
- `--output-format`: `md` (default), `txt`, `toml`.
- `<input_paths...>`: List of image files or directories.

## 4. Technical Architecture
### (1) Input Orchestration
- A module to collect all valid image files from provided paths (handling globbing and directory recursion).
- Batching images for efficient processing if needed.

### (2) AI Processing Core
- **Prompt Engineering**:
    - `extracting`: "Please extract all text from these images accurately, maintaining the structure as much as possible."
    - `briefing`: "Please analyze these images and provide a concise summary or insightful briefing of the content."
- **Model Interaction**: Sending images + prompt to Gemini.

### (3) Output Generation
- Format-specific templates or scripts to generate `.md`, `.txt`, and `.toml` files.

## 5. Implementation Roadmap

### Phase 1: Foundations & Setup
- [x] Initialize the Gemini skill structure (`SKILL.md` creation).
- [x] Ensure the skill is located in the project's `.gemini/skills/teb` directory.
- [ ] Define the CLI interface using a library like `commander` or the internal Gemini skill framework.

### Phase 2: Input Handling
- [ ] Implement a file/directory crawler to gather image paths.
- [ ] Add basic image validation (extension checks, existence).

### Phase 3: Core Logic (Gemini Integration)
- [ ] Implement the `extracting` prompt and response handler.
- [ ] Implement the `briefing` prompt and response handler.
- [ ] Handle multimodal input (sending multiple images to the model).

### Phase 4: Formatting & Output
- [ ] Implement Markdown (`.md`) formatter.
- [ ] Implement Plain Text (`.txt`) formatter.
- [ ] Implement TOML (`.toml`) formatter (structured extraction).
- [ ] Ensure output directories are created automatically if they do not exist.

### Phase 5: Polishing & Testing
- [ ] Unit tests for file gathering logic.
- [ ] Integration tests for the full CLI flow.
- [ ] Error handling (invalid files, API failures).
- [ ] Documentation update (README.md).

## 6. Success Metrics
- Successfully extracted text from complex PPT slides.
- Quality summaries for PDF page images.
- Correct file generation in the requested format (`md`, `txt`, `toml`).
