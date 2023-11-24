import sum from "../sum";

test(
    "SUM function should Calcute the Sum of Two Numbers",
()=>{
    const result = sum(3,4);
    
    // Assertion Line(only if we expected (optional))
    expect(result).toBe(7);
});