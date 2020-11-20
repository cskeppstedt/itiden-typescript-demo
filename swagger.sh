outputDir="swagger-codegen-output"
typesDir="src/types/swagger"
targetLanguage="typescript-angular"

# run swagger codegen in a docker container
docker run --rm -v \
  ${PWD}:/local swaggerapi/swagger-codegen-cli-v3 generate \
  -i https://petstore.swagger.io/v2/swagger.json \
  -l $targetLanguage \
  -o /local/$outputDir

# remove old files, copy new files, then remove all codegen files
rm -rf $typesDir
mkdir -p $typesDir
mv $outputDir/model $typesDir/model
rm -rf $outputDir

# fix any eslint related issues, format code with prettier
# ./node_modules/.bin/eslint --no-ignore --quiet --fix "$typesDir/**/*.ts"
# ./node_modules/.bin/prettier --write "$typesDir/**/*.ts"

# done!
echo "Done."
