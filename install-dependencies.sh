# Add token so Yarn can install deps from Bit
echo '//node.bit.dev/:_authToken=${BIT_TOKEN}' >> .npmrc

# Install deps using Yarn
yarn

# Remove the line that was added so Git doesn't track that change
sed -i '/BIT_TOKEN/d' .npmrc
