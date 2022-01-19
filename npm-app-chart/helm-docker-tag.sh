#!/bin/bash
find values.yaml -type f -exec sed -i -e "s|tag:|tag: ${dockerImageTagVersion}|g" {} \;