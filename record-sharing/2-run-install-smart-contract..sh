clear
echo "Clearing previous build..."
rm -rf build
echo "Installing dependencies..."
npm install @truffle/hdwallet-provider
echo "Compile..."
truffle compile
echo "Migrate..."
truffle migrate --network rs
echo "Test..."
truffle test --network rs