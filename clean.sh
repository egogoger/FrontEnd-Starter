#!/bin/bash

print_usage() {
	echo "usage: ./clean.sh [-ah]

	a : additionally delete components, models, pages, etc
	h : show help"
}

MODE="patrial"

while getopts "ahn:" flag; do
	case "${flag}" in
		a) MODE="full" ;;
		h) print_usage
		   exit 0 ;;
		*) print_usage
		   exit 1 ;;
	esac
done

###################################
######    Actual cleaning    ######
###################################

rm -rf src/pages
rm -rf src/components
if [[ "$MODE" == "full" ]]; then
  rm -rf static
  rm -rf src/models
else
  rm -rf static/icons
  rm -rf static/images
  rm src/models/PersonModel.ts
  mkdir src/pages
  mkdir src/components

  sed -i '18,20d;23d' webpack.config.js
  sed -i '12,14d;17d' webpack.config.js
fi

echo '' > src/main.scss
sed -i '8,11d;17,20d' src/main.jsx

# Clean Utils
echo '' > src/utils/constants.ts
echo '' > src/utils/interfaces.ts
echo '' > src/utils/variables.scss

# Clean store
sed -i '5d' src/store/reducers/MainReducer.ts
rm src/store/reducers/Person.ts

echo "" > src/store/actions/ActionTypes.ts
rm src/store/actions/Person.ts

# Clean README
echo "" > README.md

# Delete LICENSE
rm LICENSE

# Delete clean file itself
rm clean.sh
echo "I did my best but you still have to change package.json yourself"
