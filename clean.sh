#!/bin/bash

print_usage() {
	echo "usage: ./clean.sh [-ah]

	a : additionally delete components, models, pages, etc
	h : show help"
}

MODE="partial"

while getopts "ah:" flag; do
	case "${flag}" in
		a) MODE="full" ;;
		h) print_usage
		   exit 0 ;;
		*) print_usage
		   exit 1 ;;
	esac
done

SED_MODE="normal"
case "$OSTYPE" in
  darwin*)  SED_MODE="crazy" ;;
  bsd*)     SED_MODE="crazy" ;;
  *)        SED_MODE="crazy" ;;
esac

###################################
######    Actual cleaning    ######
###################################

echo "Deleting
..."

rm -rf src/pages
rm -rf src/components
if [[ "$MODE" == "full" ]]; then
  rm -rf static
  rm -rf src/models
  if [[ "$SED_MODE" == "crazy" ]]; then
    sed -i '' -e '18,21d' webpack.config.js
  else
    sed -i '18,21d' webpack.config.js
  fi
else
  rm -rf static/icons
  rm -rf static/images
  rm src/models/PersonModel.js
  mkdir src/pages
  mkdir src/components
fi

echo "..."

echo '' > src/main.scss

if [[ "$SED_MODE" == "crazy" ]]; then
  sed -i '' -e '4,7d;12,15d' src/main.js
else
  sed -i '4,7d;12,15d' src/main.js
fi

# Clean Utils
echo '' > src/utils/constants.js
echo '' > src/utils/htmlHelpers.js
echo '' > src/utils/variables.scss

# Clean README
echo "" > README.md

# Delete LICENSE
rm LICENSE

# Delete clean file itself
rm clean.sh

echo "...
done

I did my best but you still have to change package.json yourself"
