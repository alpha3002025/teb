---
name: teb
description: Text Extracting and Briefing skill for PPT slides and PDF page images. It can extract text or provide summaries in MD, TXT, or TOML formats.
---

# teb: Text Extracting and Briefing Skill

This skill provides specialized capabilities for extracting text and generating insights from visual media such as PPT slides and PDF page images.

## Capabilities

### 1. PPT Slide Analysis (ppt-slides)
Extract text or generate briefings from images representing PPT slides.
- **Extracting Mode**: Maintains the structure of the slide while transcribing text.
- **Briefing Mode**: Provides a high-level summary and key insights from the slides.

### 2. PDF Page Analysis (pdf-images)
Process images of document or book pages to extract text or summarize content.
- **Extracting Mode**: Focuses on verbatim text extraction.
- **Briefing Mode**: Focuses on synthesizing the main themes and arguments.

## Commands

### `/teb:ppt-slides`
Usage: `/teb:ppt-slides <image_paths...> <output_file_path>`
Example: `/teb:ppt-slides test/samples/slide-images/mtn output/result.md`

### `/teb:pdf-images`
Usage: `/teb:pdf-images <image_paths...> <output_file_path>`
Example: `/teb:pdf-images test/samples/pdf-images output/result.md`

## Implementation Details
The skill uses Gemini's multimodal vision capabilities to process the images provided in the arguments.
Input paths can be individual files or directories.
Output is generated in the requested format and saved to the current working directory or a specified output path.
