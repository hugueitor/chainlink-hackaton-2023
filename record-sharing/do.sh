clear
echo "Clearing previous build"
rm -rf build
echo "Compile..."
truffle compile
echo "Migrate..."
truffle migrate --network rs
echo "Test..."
truffle test --network rs
