#!/bin/sh

# Mirrors starter to your repo and deletes unnecessary branches
#
# Usage:
# ./fork.sh https://github.com/username/new_repository branch
#
# 1 param = url of new repository to fork to
# 2 param - master branch

NAME="FrontEnd-Starter"
GIT_NAME="${NAME}.git"
BASE="https://github.com/EgorBedov/${GIT_NAME}"

# Fetch starter repo
git clone --bare $BASE
cd $GIT_NAME
pwd
echo " --- Cloned starter"



    #############################################
  #######         Clean up branches         #######
#####################################################

branches=( "JS", "TS", "React-Redux-TS", "React-Redux-JS", "master" )

print_branches() {
  echo "All branches: "
  output=""
  for branch in "${branches[@]}"; do
    output+="${branch} "
  done
  echo $output
}

# Check if specified branch actually exists
exists="FALSE"
for branch in "${branches[@]}"; do
  [[ "$2" == "$branch" ]] && exists="TRUE"
done

if [[ "$exists" == "FALSE" ]]; then
  echo "Branch $2 does not exist"
  print_branches
  exit 1
fi
echo " --- Specified branch exists"

# Delete branches (we should not delete master branch)
for branch in "${branches[@]}"; do
  [[ "$branch" != "master" ]] && [[ "$2" != "$branch" ]] && git branch -d $branch
done
echo " --- Unnecessary branches deleted"

#####################################################
  #######         Clean up branches         #######
    #############################################


# Copy to your new repo
git push --mirror $1
echo " --- Pushed to new repo"

# Remove starter repo
cd ..
rm -rf $GIT_NAME
git clone $1
echo " --- New repo cloned"
echo " --- do not forget to change your master branch"
