#!/bin/bash

print_usage() {
	echo "usage: ./clean.sh [-ah] [-N name]

	a : additionally delete components, models, pages, etc
	h : show help
	n name: new name for project"
}

MODE="patrial"
NAME=""

while getopts "ahn:" flag; do
	case "${flag}" in
		a) MODE="full" ;;
		h) print_usage
		   exit 0 ;;
		n) NAME="${OPTARG}" ;;
		*) print_usage
		   exit 1 ;;
	esac
done

if [[ "$NAME" == "" ]]; then
	echo "Either you forgot to name your project or entered empty name
use -h option to get help"
	exit 1;
fi

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

  sed '18,20d;23d' webpack.config.js
  sed '12,14d;17d' webpack.config.js
fi

echo '' > src/main.scss
sed '8,11d;17,20d' src/main.jsx

# Clean Utils
echo '' > src/utils/constants.ts
echo '' > src/utils/interfaces.ts
echo '' > src/utils/variables.scss

# Clean store
sed '5d' src/store/reducers/MainReducer.ts
rm src/store/reducers/Person.ts

echo "" > src/store/actions/ActionTypes.ts
rm src/store/actions/Person.ts

# Clean README
echo "#$NAME" > README.md

# Delete LICENSE
rm LICENSE

# Delete clean file itself
rm clean.sh
