npm install -g @teambit/bvm
bvm install 0.0.405

echo "export PATH=\$HOME/bin:\$PATH" >> ~/.profile
export PATH=$HOME/bin:$PATH

bit config set analytics_reporting false
bit config set anonymous_reporting false
bit config set user.token ${BIT_TOKEN}

yarn config set '@fragrantjewels:registry' https://node.bit.dev