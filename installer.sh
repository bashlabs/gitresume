#!/usr/bin/env bash
set -e

# -----------------------------
# GitResume CLI Installer
# -----------------------------

CLI_NAME="gitresume"
INSTALL_DIR="/usr/local/bin"   # Default installation directory
TMP_FILE="/tmp/${CLI_NAME}_install.tmp"

# Detect OS and Architecture
OS="$(uname | tr '[:upper:]' '[:lower:]')"
ARCH="$(uname -m)"

echo "Installing ${CLI_NAME} for ${OS}-${ARCH}..."

# Construct download URL (replace with real one)
DOWNLOAD_URL="https://github.com/iamhabbeboy/gitresume-cli/releases/latest/download/${CLI_NAME}-${OS}-${ARCH}.tar.gz"

# Download the binary
echo "Downloading from $DOWNLOAD_URL ..."
curl -fsSL "$DOWNLOAD_URL" -o "$TMP_FILE"

# Extract if needed (assuming tar.gz)
tar -xzf "$TMP_FILE" -C /tmp

# Move binary to INSTALL_DIR
echo "Installing ${CLI_NAME} to ${INSTALL_DIR} ..."
chmod +x "/tmp/${CLI_NAME}"
sudo mv "/tmp/${CLI_NAME}" "$INSTALL_DIR/${CLI_NAME}"

# Cleanup
rm -f "$TMP_FILE"

echo "${CLI_NAME} installed successfully!"
echo "You can run it using: ${CLI_NAME} --help"
