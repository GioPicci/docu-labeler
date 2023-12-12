echo "Fixing dependencies for Linux Arch"
cd server
npm uninstall bcrypt
npm install bcrypt
npm uninstall sharp
npm install --platform=linux --arch=x64 sharp
echo "Starting DocuLabeler Server"
node main.js > server.out &
echo "Starting DocuLabeler Client"
cd ../doculabeler
npm start > client.out
