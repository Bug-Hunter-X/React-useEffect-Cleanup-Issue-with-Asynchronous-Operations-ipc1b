```javascript
// Corrected component
function MyComponent() {
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    setTimerId(id);

    // Correct cleanup function
    return () => {
      clearInterval(id);
      console.log('Cleaning up...');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```