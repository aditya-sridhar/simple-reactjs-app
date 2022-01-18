#!/bin/bash
find npm-app-chart/values.yaml -type f -exec sed -i -e "s|tag:|tag: ${dockerImageTagVersion}${res_pe_source_code_commitSha}|g" {} \;
rm npm-app-chart/values.yaml-e