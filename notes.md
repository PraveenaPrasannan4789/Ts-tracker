🟦 Step 1: Create a project folder
mkdir ts-demo
cd ts-demo
🟦 Step 2: Initialize Node project
npm init -y

This creates package.json (basic project setup).

🟦 Step 3: Install TypeScript tools
npm install -D typescript ts-node @types/node
🟦 Step 4: Create TypeScript config
npx tsc --init

This creates:

tsconfig.json
🟦 Step 5: Create your first TypeScript file

Create a file:

app.ts

Add this code:

function greet(name: string): string {
  return "Hello " + name;
}

console.log(greet("Praveena"));
🟦 Step 6: Run the TypeScript file

👉 Use this command:

npx ts-node app.ts
🟩 Output
Hello Praveena