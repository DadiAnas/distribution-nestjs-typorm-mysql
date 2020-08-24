set fileName=%1
set className=%2
set sourcefolder=%cd%\src
set schemaFolder=%sourcefolder%\schama

mkdir %schemaFolder%
touch %schemaFolder%\%fileName%.schema.ts
echo export Create%className%{} export Update%className%{} > %schemaFolder%/%fileName%.dto.ts