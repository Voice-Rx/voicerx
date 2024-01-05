![voicerx-logo-resized](https://github.com/Voice-Rx/voicerx/assets/76894046/93d36ca3-e543-4438-86c3-15442e770286)<br><br>
[![CodeQL](https://github.com/Voice-Rx/voicerx/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/Voice-Rx/voicerx/actions/workflows/github-code-scanning/codeql)

## Overview

VoiceRx is an innovative **voice-activated prescription generator** that leverages advanced natural language processing (NLP) and machine learning technologies. This application aims to streamline the prescription creation process for healthcare professionals by allowing them to generate prescriptions through voice commands.

## Features

- **Voice-Activated Prescription Generation:** Utilize the power of voice commands to create accurate and efficient prescriptions.
- **NLP Processing:** Leverage advanced natural language processing to interpret and understand voice inputs accurately.
- **Prescription History:** Maintain a comprehensive history of generated prescriptions for reference and auditing purposes.
- **Multi-Factor Authentication:** Ensure secure access with multi-factor authentication for healthcare professional accounts.

## Prerequisites

- Docker CLI & Docker Desktop
- Node JS LTS
- Node Package Manager (NPM)

## Installation

1. Clone the repository: 
```
git clone https://github.com/Voice-Rx/voicerx.git
```
2. Navigate to the project directory:
```
cd voicerx
```
3. Install Dependencies
```
npm install
```
4. Build Docker Image
```
docker build -t voicerx .
```
