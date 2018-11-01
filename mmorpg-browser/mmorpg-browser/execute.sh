#!/bin/bash
cd ./src/app
if [ -d "proto" ]; then
     cd ./proto
else 
    cd ./proto
    echo 创建proto目录
    mkdir proto
    cd ./proto
fi
../../../node_modules/protobufjs/cli/bin/pbjs -t static-module -w commonjs -o bundle.js ./protofile/*.proto
# import { Long } from "protobufjs";
../../../node_modules/protobufjs/cli/bin/pbts -o bundle.d.ts bundle.js
echo 已在目录$(dirname $(readlink -f "$0"))下生成：
ls
ng s
