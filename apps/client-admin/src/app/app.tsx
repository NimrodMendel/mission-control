import { Button } from '@material-tailwind/react';

export function App() {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Material Tailwind Test</h1>
      <Button>Button</Button>
      <Button color="blue">Blue Button</Button>
      <Button variant="outlined">Outlined Button</Button>
    </div>
  );
}

export default App;
