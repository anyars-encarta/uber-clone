function generatePrimes(limit) {
    const sieve = Array(limit + 1).fill(true);
    sieve[0] = sieve[1] = false; // 0 and 1 are not primes
    for (let i = 2; i * i <= limit; i++) {
        if (sieve[i]) {
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false;
            }
        }
    }
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) {
            primes.push(i);
        }
    }
    return primes;
}

function findPrimePairs(sumLimit) {
    const primes = generatePrimes(sumLimit);
    const primeSet = new Set(primes);
    const pairs = [];

    for (let i = 0; i < primes.length; i++) {
        const p1 = primes[i];
        const p2 = sumLimit - p1;
        if (p2 > p1 && primeSet.has(p2)) {
            pairs.push([p1, p2]);
        }
    }

    return pairs.sort((a, b) => a[0] - b[0]);
}

// Example usage:
const sumLimit = 18;
const result = findPrimePairs(sumLimit);
console.log(result); // [[3, 15], [5, 13]]