export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface Topic {
  id: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  shortDesc: string;
  theory: string;
  codeExample: string;
  quiz: QuizQuestion[];
}

export interface Month {
  id: number;
  title: string;
  icon: string;
  topics: Topic[];
}

export const dsaMonths: Month[] = [
  {
    id: 1,
    title: "Arrays & Strings",
    icon: "📊",
    topics: [
      {
        id: "two-pointers",
        title: "Two Pointers",
        difficulty: "easy",
        shortDesc: "Use two indices to solve array problems efficiently",
        theory: `<h3>What are Two Pointers?</h3>
<p>The two-pointer technique uses two indices that move through an array, often from opposite ends or at different speeds. This pattern converts O(n²) brute-force solutions into O(n) elegant ones.</p>
<h3>When to Use</h3>
<ul>
<li>Sorted arrays — finding pairs with a target sum</li>
<li>Removing duplicates in-place</li>
<li>Reversing arrays or strings</li>
<li>Container with most water / trapping rain water</li>
</ul>
<h3>Key Insight</h3>
<p>By maintaining two pointers and moving them based on conditions, we eliminate unnecessary comparisons. Think of it like two people searching a bookshelf from both ends — they meet in the middle!</p>
<div class="info-box"><div class="info-box-title">💡 Pattern</div>Initialize left=0, right=n-1. Move pointers inward based on your condition until they meet.</div>`,
        codeExample: `// Two Sum on Sorted Array
function twoSum(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === target) {
      console.log("Found!", arr[left], "+", arr[right], "=", target);
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  console.log("No pair found");
  return [-1, -1];
}

// Try it!
twoSum([1, 3, 5, 7, 11, 15], 16);
twoSum([2, 4, 6, 8, 10], 12);`,
        quiz: [
          {
            question:
              "What is the time complexity of the two-pointer technique on a sorted array?",
            options: ["O(n²)", "O(n)", "O(log n)", "O(n log n)"],
            answer: 1,
          },
          {
            question:
              "When both pointers start at opposite ends, when do we stop?",
            options: [
              "When left > right",
              "When left === right",
              "When left >= right",
              "When we find answer or left >= right",
            ],
            answer: 3,
          },
          {
            question: "Two pointers require the array to be...?",
            options: [
              "Always sorted",
              "Always unsorted",
              "Sorted for sum problems, not always",
              "Of even length",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "sorting",
        title: "Sorting",
        difficulty: "easy",
        shortDesc: "Understand and implement core sorting algorithms",
        theory: `<h3>Why Sorting Matters</h3>
<p>Sorting is the foundation of countless algorithms. A sorted array unlocks binary search, two pointers, and many greedy approaches.</p>
<h3>Key Algorithms</h3>
<ul>
<li><strong>Bubble Sort</strong> — O(n²) — repeatedly swap adjacent elements</li>
<li><strong>Selection Sort</strong> — O(n²) — find minimum and place it</li>
<li><strong>Merge Sort</strong> — O(n log n) — divide, sort halves, merge</li>
<li><strong>Quick Sort</strong> — O(n log n) avg — pick pivot, partition</li>
</ul>
<div class="info-box"><div class="info-box-title">💡 Remember</div>Merge Sort guarantees O(n log n) but uses O(n) space. Quick Sort is O(n log n) average but O(n²) worst case.</div>`,
        codeExample: `// Bubble Sort with visualization
function bubbleSort(arr) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:", arr.join(", "));
console.log("Sorted:  ", bubbleSort(arr).join(", "));`,
        quiz: [
          {
            question: "Which sorting algorithm has O(n log n) guaranteed time?",
            options: [
              "Quick Sort",
              "Bubble Sort",
              "Merge Sort",
              "Selection Sort",
            ],
            answer: 2,
          },
          {
            question: "What is the space complexity of Merge Sort?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: 1,
          },
          {
            question: "Which sort is best for nearly sorted arrays?",
            options: [
              "Quick Sort",
              "Insertion Sort",
              "Selection Sort",
              "Merge Sort",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "sliding-window",
        title: "Sliding Window",
        difficulty: "medium",
        shortDesc: "Efficiently process contiguous subarrays",
        theory: `<h3>The Sliding Window Pattern</h3>
<p>Instead of recalculating from scratch for every subarray, maintain a "window" that slides across the array. Add the new element, remove the old one — O(1) per step!</p>
<h3>Two Types</h3>
<ul><li><strong>Fixed-size window</strong> — max sum of k elements</li><li><strong>Variable-size window</strong> — smallest subarray with sum ≥ target</li></ul>
<div class="info-box"><div class="info-box-title">💡 Pattern</div>Expand window by moving right pointer. Shrink by moving left pointer when condition is violated.</div>`,
        codeExample: `// Max sum of k consecutive elements
function maxSumSubarray(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];
  
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // slide!
    maxSum = Math.max(maxSum, windowSum);
  }
  console.log("Max sum of", k, "elements:", maxSum);
  return maxSum;
}

maxSumSubarray([2, 1, 5, 1, 3, 2], 3);`,
        quiz: [
          {
            question: "Sliding window reduces time from ___ to O(n)",
            options: ["O(n²)", "O(n log n)", "O(2^n)", "O(n³)"],
            answer: 0,
          },
          {
            question:
              "In a fixed-size window of k, how many elements are added/removed per slide?",
            options: [
              "k elements",
              "2 elements",
              "1 element each",
              "All elements",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "prefix-sums",
        title: "Prefix Sums",
        difficulty: "easy",
        shortDesc: "Precompute cumulative sums for range queries",
        theory: `<h3>Prefix Sum Array</h3><p>Build a cumulative sum array where prefix[i] = sum of elements from 0 to i. Then any range sum = prefix[right] - prefix[left-1] in O(1)!</p>
<div class="info-box"><div class="info-box-title">💡 Use Case</div>Perfect for multiple range sum queries on a static array.</div>`,
        codeExample: `function buildPrefixSum(arr) {
  const prefix = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i-1] + arr[i];
  }
  return prefix;
}

function rangeSum(prefix, l, r) {
  return l === 0 ? prefix[r] : prefix[r] - prefix[l-1];
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6];
const prefix = buildPrefixSum(arr);
console.log("Array:", arr.join(", "));
console.log("Sum [2..5]:", rangeSum(prefix, 2, 5));
console.log("Sum [0..3]:", rangeSum(prefix, 0, 3));`,
        quiz: [
          {
            question: "Range sum query with prefix sums takes?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            answer: 1,
          },
          {
            question: "Building a prefix sum array takes?",
            options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
            answer: 2,
          },
        ],
      },
      {
        id: "hashmaps",
        title: "Hashmaps",
        difficulty: "easy",
        shortDesc: "O(1) lookup for frequency counting and caching",
        theory: `<h3>Hash Maps</h3><p>A hash map stores key-value pairs with O(1) average lookup. Essential for frequency counting, two-sum patterns, and caching.</p>
<h3>Common Patterns</h3><ul><li>Frequency counter</li><li>Two Sum (unsorted)</li><li>Group anagrams</li><li>First non-repeating character</li></ul>`,
        codeExample: `// Two Sum using HashMap
function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      console.log("Found!", nums[map.get(complement)], "+", nums[i], "=", target);
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}

twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);`,
        quiz: [
          {
            question: "Average time for HashMap lookup is?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            answer: 2,
          },
          {
            question: "HashMap two-sum approach time complexity?",
            options: ["O(n²)", "O(n)", "O(n log n)", "O(1)"],
            answer: 1,
          },
        ],
      },
      {
        id: "string-manipulation",
        title: "String Manipulation",
        difficulty: "easy",
        shortDesc: "Master common string operations and patterns",
        theory: `<h3>String Fundamentals</h3><p>Strings are arrays of characters. Common operations: reverse, palindrome check, anagram detection, character frequency.</p>
<h3>Key Techniques</h3><ul><li>Two pointers for palindrome checks</li><li>Frequency maps for anagrams</li><li>StringBuilder pattern for concatenation</li></ul>`,
        codeExample: `// Check if string is palindrome
function isPalindrome(s) {
  const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let l = 0, r = clean.length - 1;
  while (l < r) {
    if (clean[l] !== clean[r]) return false;
    l++; r--;
  }
  return true;
}

console.log("'racecar':", isPalindrome("racecar"));
console.log("'hello':", isPalindrome("hello"));
console.log("'A man a plan a canal Panama':", isPalindrome("A man a plan a canal Panama"));`,
        quiz: [
          {
            question: "Checking palindrome with two pointers takes?",
            options: ["O(n²)", "O(n)", "O(log n)", "O(1)"],
            answer: 1,
          },
          {
            question: "Strings in JavaScript are...?",
            options: [
              "Mutable",
              "Immutable",
              "Sometimes mutable",
              "Linked lists",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Strings & Searching",
    icon: "🔍",
    topics: [
      {
        id: "regex",
        title: "Regular Expressions",
        difficulty: "medium",
        shortDesc: "Pattern matching with regex",
        theory:
          "<h3>Regular Expressions</h3><p>Regex lets you define search patterns. Essential for validation, parsing, and text processing.</p><ul><li><code>\\d</code> — digit, <code>\\w</code> — word char, <code>.</code> — any char</li><li><code>*</code> — 0+, <code>+</code> — 1+, <code>?</code> — 0 or 1</li><li><code>[]</code> — character class, <code>()</code> — group</li></ul>",
        codeExample: `const email = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;\nconsole.log("test@mail.com:", email.test("test@mail.com"));\nconsole.log("invalid:", email.test("not-an-email"));`,
        quiz: [
          {
            question: "What does \\d+ match?",
            options: [
              "One digit",
              "One or more digits",
              "Zero or more digits",
              "Letters",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "binary-search",
        title: "Basic Binary Search",
        difficulty: "easy",
        shortDesc: "Divide and conquer search on sorted data",
        theory:
          '<h3>Binary Search</h3><p>Cut the search space in half each step. Only works on sorted arrays. O(log n) time.</p><div class="info-box"><div class="info-box-title">💡 Template</div>Set lo=0, hi=n-1. While lo<=hi, check mid. Go left or right based on comparison.</div>',
        codeExample: `function binarySearch(arr, target) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo <= hi) {\n    const mid = Math.floor((lo + hi) / 2);\n    if (arr[mid] === target) { console.log("Found at index", mid); return mid; }\n    else if (arr[mid] < target) lo = mid + 1;\n    else hi = mid - 1;\n  }\n  console.log("Not found"); return -1;\n}\nbinarySearch([1,3,5,7,9,11,13], 7);`,
        quiz: [
          {
            question: "Binary search time complexity?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            answer: 1,
          },
        ],
      },
      {
        id: "range-binary-search",
        title: "Range Based Binary Search",
        difficulty: "medium",
        shortDesc: "Find boundaries using binary search variants",
        theory:
          '<h3>Finding Ranges</h3><p>Use lower_bound and upper_bound to find the first and last occurrence of an element. Also useful for "search space" problems.</p>',
        codeExample: `function lowerBound(arr, target) {\n  let lo = 0, hi = arr.length;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (arr[mid] < target) lo = mid + 1;\n    else hi = mid;\n  }\n  return lo;\n}\nconst arr = [1,2,2,2,3,4,5];\nconsole.log("First 2 at index:", lowerBound(arr, 2));`,
        quiz: [
          {
            question: "Lower bound finds?",
            options: [
              "Last occurrence",
              "First occurrence ≥ target",
              "Exact match only",
              "Middle element",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "allocation-problems",
        title: "Allocation Problems",
        difficulty: "hard",
        shortDesc: "Binary search on answer space",
        theory:
          '<h3>Binary Search on Answer</h3><p>When asked "what is the minimum maximum?" or "what is the maximum minimum?", binary search on the answer and validate with a greedy check.</p>',
        codeExample: `// Allocate minimum pages\nfunction canAllocate(books, students, maxPages) {\n  let count = 1, sum = 0;\n  for (const p of books) {\n    if (sum + p > maxPages) { count++; sum = p; }\n    else sum += p;\n  }\n  return count <= students;\n}\nconsole.log("Can allocate with max 100?", canAllocate([10,20,30,40], 2, 100));`,
        quiz: [
          {
            question: "In allocation problems, we binary search on?",
            options: [
              "Array indices",
              "The answer value",
              "Number of students",
              "Book pages",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "counting-occurrences",
        title: "Counting Occurrences",
        difficulty: "easy",
        shortDesc: "Count frequency using search techniques",
        theory:
          "<h3>Counting with Binary Search</h3><p>Count occurrences of a value in a sorted array by finding first and last positions.</p>",
        codeExample: `function countOccurrences(arr, target) {\n  function findFirst(arr, t) { let lo=0,hi=arr.length-1,res=-1; while(lo<=hi){const m=(lo+hi)>>1; if(arr[m]===t){res=m;hi=m-1;}else if(arr[m]<t)lo=m+1;else hi=m-1;} return res; }\n  function findLast(arr, t) { let lo=0,hi=arr.length-1,res=-1; while(lo<=hi){const m=(lo+hi)>>1; if(arr[m]===t){res=m;lo=m+1;}else if(arr[m]<t)lo=m+1;else hi=m-1;} return res; }\n  const f=findFirst(arr,target), l=findLast(arr,target);\n  console.log(f===-1?"Not found":"Count: "+(l-f+1)); return f===-1?0:l-f+1;\n}\ncountOccurrences([1,2,2,2,3,4,5], 2);`,
        quiz: [
          {
            question: "Counting in sorted array using binary search takes?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            answer: 1,
          },
        ],
      },
      {
        id: "bitonic-array",
        title: "Bitonic Array Search",
        difficulty: "hard",
        shortDesc: "Search in arrays that increase then decrease",
        theory:
          "<h3>Bitonic Array</h3><p>An array that first increases then decreases. Find the peak first, then binary search both halves.</p>",
        codeExample: `function findPeak(arr) {\n  let lo = 0, hi = arr.length - 1;\n  while (lo < hi) {\n    const mid = (lo + hi) >> 1;\n    if (arr[mid] < arr[mid+1]) lo = mid + 1;\n    else hi = mid;\n  }\n  console.log("Peak:", arr[lo], "at index", lo);\n  return lo;\n}\nfindPeak([1, 3, 8, 12, 9, 5, 2]);`,
        quiz: [
          {
            question: "Time to find peak in bitonic array?",
            options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Intervals, Stacks, Queues",
    icon: "📚",
    topics: [
      {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "medium",
        shortDesc: "Combine overlapping intervals",
        theory:
          "<h3>Merge Intervals</h3><p>Sort intervals by start time. Iterate and merge if current overlaps with previous.</p>",
        codeExample: `function merge(intervals) {\n  intervals.sort((a,b) => a[0]-b[0]);\n  const res = [intervals[0]];\n  for (let i = 1; i < intervals.length; i++) {\n    const last = res[res.length-1];\n    if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n    else res.push(intervals[i]);\n  }\n  console.log("Merged:", JSON.stringify(res)); return res;\n}\nmerge([[1,3],[2,6],[8,10],[15,18]]);`,
        quiz: [
          {
            question: "First step in merge intervals?",
            options: [
              "Find max",
              "Sort by start",
              "Binary search",
              "Use hashmap",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "design-problems-stack",
        title: "Design Problems (Stack/Queue)",
        difficulty: "medium",
        shortDesc: "Implement custom data structures",
        theory:
          "<h3>Stack & Queue Design</h3><p>Implement stacks using queues and vice versa. Key pattern: use auxiliary structure for operations.</p>",
        codeExample: `class MinStack {\n  constructor() { this.stack = []; this.minStack = []; }\n  push(val) { this.stack.push(val); this.minStack.push(this.minStack.length === 0 ? val : Math.min(val, this.getMin())); }\n  pop() { this.stack.pop(); this.minStack.pop(); }\n  top() { return this.stack[this.stack.length-1]; }\n  getMin() { return this.minStack[this.minStack.length-1]; }\n}\nconst s = new MinStack(); s.push(5); s.push(2); s.push(7);\nconsole.log("Min:", s.getMin()); s.pop(); console.log("Min after pop:", s.getMin());`,
        quiz: [
          {
            question: "MinStack getMin() time complexity?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
            answer: 2,
          },
        ],
      },
      {
        id: "monotonic-stack",
        title: "Monotonic Stack",
        difficulty: "medium",
        shortDesc: "Stack that maintains sorted order",
        theory:
          '<h3>Monotonic Stack</h3><p>A stack where elements are always in increasing (or decreasing) order. Pop elements that violate the order. Great for "next greater element" problems.</p>',
        codeExample: `function nextGreater(arr) {\n  const res = new Array(arr.length).fill(-1);\n  const stack = [];\n  for (let i = 0; i < arr.length; i++) {\n    while (stack.length && arr[stack[stack.length-1]] < arr[i]) {\n      res[stack.pop()] = arr[i];\n    }\n    stack.push(i);\n  }\n  console.log("Next Greater:", res.join(", ")); return res;\n}\nnextGreater([4, 5, 2, 25, 7]);`,
        quiz: [
          {
            question: "Next Greater Element with monotonic stack takes?",
            options: ["O(n²)", "O(n log n)", "O(n)", "O(log n)"],
            answer: 2,
          },
        ],
      },
      {
        id: "expression-eval",
        title: "Expression Evaluation",
        difficulty: "hard",
        shortDesc: "Evaluate math expressions using stacks",
        theory:
          "<h3>Expression Evaluation</h3><p>Use two stacks — one for numbers, one for operators. Handle precedence and parentheses.</p>",
        codeExample: `function evalPostfix(expr) {\n  const stack = [];\n  for (const token of expr.split(' ')) {\n    if (!isNaN(token)) stack.push(Number(token));\n    else { const b = stack.pop(), a = stack.pop();\n      if (token==='+') stack.push(a+b);\n      else if (token==='-') stack.push(a-b);\n      else if (token==='*') stack.push(a*b);\n      else stack.push(Math.floor(a/b));\n    }\n  }\n  console.log("Result:", stack[0]); return stack[0];\n}\nevalPostfix("3 4 + 2 *");`,
        quiz: [
          {
            question: "Postfix evaluation uses how many stacks?",
            options: ["0", "1", "2", "3"],
            answer: 1,
          },
        ],
      },
      {
        id: "two-stacks",
        title: "Two Stacks",
        difficulty: "medium",
        shortDesc: "Implement queue using two stacks",
        theory:
          '<h3>Queue from Two Stacks</h3><p>Use an "inbox" and "outbox" stack. Push to inbox, pop from outbox (refill from inbox when empty).</p>',
        codeExample: `class QueueTwoStacks {\n  constructor() { this.inbox = []; this.outbox = []; }\n  enqueue(val) { this.inbox.push(val); }\n  dequeue() {\n    if (!this.outbox.length) while (this.inbox.length) this.outbox.push(this.inbox.pop());\n    return this.outbox.pop();\n  }\n}\nconst q = new QueueTwoStacks(); q.enqueue(1); q.enqueue(2); q.enqueue(3);\nconsole.log(q.dequeue(), q.dequeue(), q.dequeue());`,
        quiz: [
          {
            question: "Amortized dequeue time with two stacks?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            answer: 1,
          },
        ],
      },
      {
        id: "sliding-window-monotonic",
        title: "Sliding Window + Monotonic Queue",
        difficulty: "hard",
        shortDesc: "Max/min in sliding window using deque",
        theory:
          "<h3>Sliding Window Maximum</h3><p>Use a monotonic deque to track the maximum in a sliding window of size k in O(n) total.</p>",
        codeExample: `function maxSlidingWindow(nums, k) {\n  const deque = [], result = [];\n  for (let i = 0; i < nums.length; i++) {\n    while (deque.length && deque[0] < i - k + 1) deque.shift();\n    while (deque.length && nums[deque[deque.length-1]] < nums[i]) deque.pop();\n    deque.push(i);\n    if (i >= k - 1) result.push(nums[deque[0]]);\n  }\n  console.log("Window maxes:", result.join(", ")); return result;\n}\nmaxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);`,
        quiz: [
          {
            question: "Sliding window max with deque takes?",
            options: ["O(nk)", "O(n log k)", "O(n)", "O(n²)"],
            answer: 2,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Linked Lists & Trees",
    icon: "🌳",
    topics: [
      {
        id: "fast-slow-pointers",
        title: "Fast & Slow Pointers",
        difficulty: "medium",
        shortDesc: "Detect cycles and find midpoints",
        theory:
          "<h3>Floyd's Tortoise & Hare</h3><p>Use two pointers moving at different speeds. Slow moves 1 step, fast moves 2 steps. They meet inside a cycle!</p>",
        codeExample: `class ListNode { constructor(val) { this.val = val; this.next = null; } }\nfunction hasCycle(head) {\n  let slow = head, fast = head;\n  while (fast && fast.next) {\n    slow = slow.next; fast = fast.next.next;\n    if (slow === fast) { console.log("Cycle detected!"); return true; }\n  }\n  console.log("No cycle"); return false;\n}\nconst a = new ListNode(1), b = new ListNode(2), c = new ListNode(3);\na.next = b; b.next = c; c.next = b; // cycle!\nhasCycle(a);`,
        quiz: [
          {
            question: "Fast-slow pointers detect cycles in?",
            options: ["O(n²)", "O(n)", "O(log n)", "O(1)"],
            answer: 1,
          },
        ],
      },
      {
        id: "dummy-node",
        title: "Dummy Node Technique",
        difficulty: "easy",
        shortDesc: "Simplify linked list edge cases",
        theory:
          "<h3>Dummy Node</h3><p>Create a fake head node to avoid special-casing the first element. Return dummy.next at the end.</p>",
        codeExample: `class ListNode { constructor(val, next=null) { this.val=val; this.next=next; } }\nfunction removeElements(head, val) {\n  const dummy = new ListNode(0, head);\n  let curr = dummy;\n  while (curr.next) {\n    if (curr.next.val === val) curr.next = curr.next.next;\n    else curr = curr.next;\n  }\n  let r = dummy.next, out = [];\n  while(r) { out.push(r.val); r = r.next; }\n  console.log("After removing " + val + ":", out.join("->"));\n}\nremoveElements(new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(6))))), 6);`,
        quiz: [
          {
            question: "Dummy node helps with?",
            options: [
              "Performance",
              "Edge cases at head",
              "Sorting",
              "Cycle detection",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "ll-recursion",
        title: "Linked List Recursion",
        difficulty: "medium",
        shortDesc: "Solve LL problems recursively",
        theory:
          "<h3>Recursive Linked List</h3><p>Many linked list problems have elegant recursive solutions. Base case: null node. Recursive case: process current and recurse on next.</p>",
        codeExample: `class ListNode { constructor(val, next=null) { this.val=val; this.next=next; } }\nfunction reverseList(head) {\n  if (!head || !head.next) return head;\n  const newHead = reverseList(head.next);\n  head.next.next = head; head.next = null;\n  return newHead;\n}\nlet list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));\nlet rev = reverseList(list), out = [];\nwhile(rev) { out.push(rev.val); rev = rev.next; }\nconsole.log("Reversed:", out.join("->"));`,
        quiz: [
          {
            question: "Recursive reverse LL space complexity?",
            options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
            answer: 1,
          },
        ],
      },
      {
        id: "in-place-reversal",
        title: "In-Place Reversal",
        difficulty: "medium",
        shortDesc: "Reverse linked list without extra space",
        theory:
          "<h3>Iterative In-Place Reversal</h3><p>Use three pointers: prev, curr, next. At each step, reverse the link and advance all three.</p>",
        codeExample: `class ListNode { constructor(val, next=null) { this.val=val; this.next=next; } }\nfunction reverse(head) {\n  let prev = null, curr = head;\n  while (curr) {\n    const next = curr.next; curr.next = prev; prev = curr; curr = next;\n  }\n  let r = prev, out = [];\n  while(r) { out.push(r.val); r = r.next; }\n  console.log("Reversed:", out.join("->")); return prev;\n}\nreverse(new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))));`,
        quiz: [
          {
            question: "Iterative reversal space complexity?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n²)"],
            answer: 1,
          },
        ],
      },
      {
        id: "tree-traversal",
        title: "Tree Traversal",
        difficulty: "easy",
        shortDesc: "Inorder, preorder, postorder, and level-order",
        theory:
          "<h3>Tree Traversals</h3><ul><li><strong>Inorder</strong> (L, Root, R) — gives sorted order for BST</li><li><strong>Preorder</strong> (Root, L, R) — copy tree structure</li><li><strong>Postorder</strong> (L, R, Root) — delete tree</li><li><strong>Level-order</strong> — BFS with queue</li></ul>",
        codeExample: `class TreeNode { constructor(val,l=null,r=null) { this.val=val; this.left=l; this.right=r; } }\nfunction inorder(node, res=[]) {\n  if (!node) return res;\n  inorder(node.left, res); res.push(node.val); inorder(node.right, res);\n  return res;\n}\nconst tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5), new TreeNode(7)));\nconsole.log("Inorder:", inorder(tree).join(", "));`,
        quiz: [
          {
            question: "Which traversal gives sorted order for BST?",
            options: ["Preorder", "Postorder", "Inorder", "Level-order"],
            answer: 2,
          },
        ],
      },
      {
        id: "tree-construction",
        title: "Tree Construction",
        difficulty: "hard",
        shortDesc: "Build trees from traversal sequences",
        theory:
          "<h3>Build Tree from Traversals</h3><p>Use preorder to find root, use inorder to split left/right subtrees. Recursively construct.</p>",
        codeExample: `class TreeNode { constructor(val,l=null,r=null) { this.val=val; this.left=l; this.right=r; } }\nfunction buildTree(preorder, inorder) {\n  if (!preorder.length) return null;\n  const root = new TreeNode(preorder[0]);\n  const mid = inorder.indexOf(preorder[0]);\n  root.left = buildTree(preorder.slice(1, mid+1), inorder.slice(0, mid));\n  root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));\n  return root;\n}\nconst t = buildTree([3,9,20,15,7], [9,3,15,20,7]);\nconsole.log("Root:", t.val, "Left:", t.left.val, "Right:", t.right.val);`,
        quiz: [
          {
            question: "To build tree you need at least?",
            options: [
              "One traversal",
              "Two traversals",
              "Three traversals",
              "Full array",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Trees & Heaps",
    icon: "🏔️",
    topics: [
      {
        id: "mirror-symmetry",
        title: "Mirror & Symmetry",
        difficulty: "easy",
        shortDesc: "Check if a tree is symmetric or mirror",
        theory:
          "<h3>Symmetric Tree</h3><p>A tree is symmetric if left subtree mirrors right subtree. Compare left.left with right.right and left.right with right.left recursively.</p>",
        codeExample: `class TreeNode { constructor(v,l=null,r=null) { this.val=v; this.left=l; this.right=r; } }\nfunction isSymmetric(root) {\n  function check(a, b) {\n    if (!a && !b) return true;\n    if (!a || !b) return false;\n    return a.val === b.val && check(a.left, b.right) && check(a.right, b.left);\n  }\n  console.log("Symmetric:", check(root?.left, root?.right));\n}\nconst t = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));\nisSymmetric(t);`,
        quiz: [
          {
            question: "Symmetric tree check compares?",
            options: [
              "left.left with right.left",
              "left.left with right.right",
              "Only root values",
              "Leaf counts",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "path-sum",
        title: "Path Sum & Root to Leaf",
        difficulty: "medium",
        shortDesc: "Find paths with target sum in trees",
        theory:
          "<h3>Path Sum</h3><p>Traverse from root to leaves, tracking running sum. When you reach a leaf, check if sum equals target.</p>",
        codeExample: `class TreeNode { constructor(v,l=null,r=null) { this.val=v; this.left=l; this.right=r; } }\nfunction hasPathSum(root, target, sum=0) {\n  if (!root) return false;\n  sum += root.val;\n  if (!root.left && !root.right) return sum === target;\n  return hasPathSum(root.left, target, sum) || hasPathSum(root.right, target, sum);\n}\nconst t = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2))), new TreeNode(8));\nconsole.log("Has path sum 22:", hasPathSum(t, 22));`,
        quiz: [
          {
            question: "Path sum checks at which nodes?",
            options: [
              "Every node",
              "Only leaf nodes",
              "Only root",
              "Internal nodes",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "tree-search",
        title: "Tree Traversal & Search",
        difficulty: "medium",
        shortDesc: "DFS and BFS on trees",
        theory:
          "<h3>DFS vs BFS</h3><p>DFS uses stack/recursion and goes deep first. BFS uses queue and goes level by level. Choose based on problem needs.</p>",
        codeExample: `class TreeNode { constructor(v,l=null,r=null) { this.val=v; this.left=l; this.right=r; } }\nfunction bfs(root) {\n  if (!root) return [];\n  const q = [root], result = [];\n  while (q.length) {\n    const node = q.shift(); result.push(node.val);\n    if (node.left) q.push(node.left);\n    if (node.right) q.push(node.right);\n  }\n  console.log("BFS:", result.join(", ")); return result;\n}\nbfs(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3)));`,
        quiz: [
          {
            question: "BFS uses which data structure?",
            options: ["Stack", "Queue", "Heap", "HashMap"],
            answer: 1,
          },
        ],
      },
      {
        id: "validation",
        title: "Validation & Properties",
        difficulty: "medium",
        shortDesc: "Validate BST and check tree properties",
        theory:
          "<h3>Validate BST</h3><p>Each node must be within a valid range (min, max). Recursively tighten the range as you go down.</p>",
        codeExample: `class TreeNode { constructor(v,l=null,r=null) { this.val=v; this.left=l; this.right=r; } }\nfunction isValidBST(node, min=-Infinity, max=Infinity) {\n  if (!node) return true;\n  if (node.val <= min || node.val >= max) return false;\n  return isValidBST(node.left, min, node.val) && isValidBST(node.right, node.val, max);\n}\nconst valid = new TreeNode(5, new TreeNode(3), new TreeNode(7));\nconst invalid = new TreeNode(5, new TreeNode(6), new TreeNode(7));\nconsole.log("Valid BST:", isValidBST(valid));\nconsole.log("Invalid BST:", isValidBST(invalid));`,
        quiz: [
          {
            question: "BST validation passes what down?",
            options: [
              "Parent pointer",
              "Min/Max range",
              "Level count",
              "Node count",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "kth-largest",
        title: "Heaps: Kth Largest/Smallest",
        difficulty: "medium",
        shortDesc: "Use heaps for order statistics",
        theory:
          "<h3>Kth Element with Heap</h3><p>Keep a min-heap of size k. Top element is the kth largest. For kth smallest, use max-heap.</p>",
        codeExample: `function kthLargest(arr, k) {\n  // Simple approach: sort descending and pick kth\n  const sorted = [...arr].sort((a,b) => b-a);\n  console.log("Array:", arr.join(", "));\n  console.log(k + "th largest:", sorted[k-1]);\n  return sorted[k-1];\n}\nkthLargest([3, 2, 1, 5, 6, 4], 2);\nkthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);`,
        quiz: [
          {
            question: "Kth largest with min-heap of size k takes?",
            options: ["O(n)", "O(n log k)", "O(n log n)", "O(k)"],
            answer: 1,
          },
        ],
      },
      {
        id: "top-k-frequent",
        title: "Heaps: Top K Frequent",
        difficulty: "medium",
        shortDesc: "Find most frequent elements using heaps",
        theory:
          "<h3>Top K Frequent</h3><p>Count frequencies with a hash map, then use a heap (or bucket sort) to find the k most frequent elements.</p>",
        codeExample: `function topKFrequent(nums, k) {\n  const freq = {};\n  for (const n of nums) freq[n] = (freq[n]||0) + 1;\n  const result = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,k).map(e=>Number(e[0]));\n  console.log("Top", k, "frequent:", result.join(", "));\n  return result;\n}\ntopKFrequent([1,1,1,2,2,3], 2);`,
        quiz: [
          {
            question: "Top K frequent with bucket sort takes?",
            options: ["O(n log n)", "O(n)", "O(n²)", "O(k log n)"],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Heaps, DP, & Graphs",
    icon: "🌐",
    topics: [
      {
        id: "merge-k-lists",
        title: "Heaps: Merge K Lists",
        difficulty: "hard",
        shortDesc: "Merge k sorted arrays/lists efficiently",
        theory:
          "<h3>Merge K Sorted Lists</h3><p>Use a min-heap of size k holding one element from each list. Pop smallest, push next from that list.</p>",
        codeExample: `function mergeKSorted(arrays) {\n  const result = [];\n  const pointers = arrays.map(() => 0);\n  while (true) {\n    let minVal = Infinity, minIdx = -1;\n    for (let i = 0; i < arrays.length; i++) {\n      if (pointers[i] < arrays[i].length && arrays[i][pointers[i]] < minVal) {\n        minVal = arrays[i][pointers[i]]; minIdx = i;\n      }\n    }\n    if (minIdx === -1) break;\n    result.push(minVal); pointers[minIdx]++;\n  }\n  console.log("Merged:", result.join(", ")); return result;\n}\nmergeKSorted([[1,4,7],[2,5,8],[3,6,9]]);`,
        quiz: [
          {
            question: "Merge K sorted lists with heap takes?",
            options: ["O(NK)", "O(NK log K)", "O(N log N)", "O(N²)"],
            answer: 1,
          },
        ],
      },
      {
        id: "sliding-window-heap",
        title: "Heaps: Sliding Window Max/Min",
        difficulty: "hard",
        shortDesc: "Find max/min in sliding window with heap",
        theory:
          "<h3>Heap for Window Max</h3><p>Maintain a max-heap. Add new elements, lazily remove elements outside the window (check if top is out of bounds).</p>",
        codeExample: `function slidingWindowMax(nums, k) {\n  const result = [];\n  for (let i = 0; i <= nums.length - k; i++) {\n    let max = -Infinity;\n    for (let j = i; j < i + k; j++) max = Math.max(max, nums[j]);\n    result.push(max);\n  }\n  console.log("Window maxes:", result.join(", ")); return result;\n}\nslidingWindowMax([1,3,-1,-3,5,3,6,7], 3);`,
        quiz: [
          {
            question: "Optimal sliding window max takes?",
            options: ["O(nk)", "O(n log k)", "O(n)", "O(n²)"],
            answer: 2,
          },
        ],
      },
      {
        id: "heap-design",
        title: "Heap Design Problems",
        difficulty: "hard",
        shortDesc: "Build custom heaps and priority queues",
        theory:
          "<h3>Heap Implementation</h3><p>A heap is a complete binary tree stored as an array. Parent at i, children at 2i+1 and 2i+2. Maintain heap property via bubbleUp and sinkDown.</p>",
        codeExample: `class MinHeap {\n  constructor() { this.data = []; }\n  push(val) { this.data.push(val); this._bubbleUp(this.data.length-1); }\n  pop() { const top = this.data[0]; const last = this.data.pop(); if (this.data.length) { this.data[0] = last; this._sinkDown(0); } return top; }\n  _bubbleUp(i) { while (i > 0) { const p = (i-1)>>1; if (this.data[p] <= this.data[i]) break; [this.data[p],this.data[i]] = [this.data[i],this.data[p]]; i = p; } }\n  _sinkDown(i) { const n = this.data.length; while (true) { let s=i,l=2*i+1,r=2*i+2; if (l<n && this.data[l]<this.data[s]) s=l; if (r<n && this.data[r]<this.data[s]) s=r; if (s===i) break; [this.data[s],this.data[i]]=[this.data[i],this.data[s]]; i=s; } }\n}\nconst h = new MinHeap(); [5,3,8,1,2].forEach(v=>h.push(v));\nconsole.log(h.pop(), h.pop(), h.pop());`,
        quiz: [
          {
            question: "Heap insert time complexity?",
            options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
            answer: 2,
          },
        ],
      },
      {
        id: "heaps-graphs",
        title: "Heaps with Graphs",
        difficulty: "hard",
        shortDesc: "Dijkstra and Prim using heaps",
        theory:
          "<h3>Dijkstra's Algorithm</h3><p>Find shortest paths from source using a min-heap priority queue. Greedily pick the closest unvisited node.</p>",
        codeExample: `function dijkstra(graph, start) {\n  const dist = {}; for (const n of Object.keys(graph)) dist[n] = Infinity;\n  dist[start] = 0;\n  const pq = [[0, start]]; // [dist, node]\n  while (pq.length) {\n    pq.sort((a,b)=>a[0]-b[0]); const [d, u] = pq.shift();\n    if (d > dist[u]) continue;\n    for (const [v, w] of graph[u] || []) {\n      if (dist[u] + w < dist[v]) { dist[v] = dist[u] + w; pq.push([dist[v], v]); }\n    }\n  }\n  console.log("Shortest distances:", JSON.stringify(dist));\n}\ndijkstra({ A:[['B',1],['C',4]], B:[['C',2],['D',5]], C:[['D',1]], D:[] }, 'A');`,
        quiz: [
          {
            question: "Dijkstra with min-heap takes?",
            options: ["O(V²)", "O((V+E) log V)", "O(VE)", "O(V log E)"],
            answer: 1,
          },
        ],
      },
      {
        id: "dynamic-programming",
        title: "Dynamic Programming",
        difficulty: "hard",
        shortDesc: "Solve optimization problems with memoization",
        theory:
          "<h3>Dynamic Programming</h3><p>Break problems into overlapping subproblems. Store results to avoid recomputation. Two approaches: top-down (memoization) and bottom-up (tabulation).</p><ul><li>Fibonacci — classic intro</li><li>Knapsack — pick items with weight limit</li><li>LCS — longest common subsequence</li></ul>",
        codeExample: `// Fibonacci: Memoized vs Tabulated\nfunction fibMemo(n, memo={}) {\n  if (n <= 1) return n;\n  if (memo[n]) return memo[n];\n  return memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);\n}\n\nfunction fibTab(n) {\n  const dp = [0, 1];\n  for (let i = 2; i <= n; i++) dp[i] = dp[i-1] + dp[i-2];\n  return dp[n];\n}\n\nconsole.log("Fib(10) memo:", fibMemo(10));\nconsole.log("Fib(10) tab:", fibTab(10));\nconsole.log("Fib(40):", fibTab(40));`,
        quiz: [
          {
            question: "DP time for Fibonacci?",
            options: ["O(2^n)", "O(n)", "O(n²)", "O(n log n)"],
            answer: 1,
          },
          {
            question: "DP requires problems to have?",
            options: [
              "Sorted input",
              "Overlapping subproblems + optimal substructure",
              "Binary tree structure",
              "Even number of elements",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "graph-patterns",
        title: "Graph Patterns",
        difficulty: "hard",
        shortDesc: "BFS, DFS, topological sort, and more",
        theory:
          "<h3>Graph Algorithms</h3><ul><li><strong>BFS</strong> — shortest path in unweighted graphs</li><li><strong>DFS</strong> — cycle detection, connected components</li><li><strong>Topological Sort</strong> — ordering with dependencies</li></ul>",
        codeExample: `// BFS on graph\nfunction bfs(graph, start) {\n  const visited = new Set([start]);\n  const queue = [start];\n  const order = [];\n  while (queue.length) {\n    const node = queue.shift(); order.push(node);\n    for (const neighbor of graph[node] || []) {\n      if (!visited.has(neighbor)) { visited.add(neighbor); queue.push(neighbor); }\n    }\n  }\n  console.log("BFS order:", order.join(" -> ")); return order;\n}\nbfs({ A:['B','C'], B:['D'], C:['D','E'], D:['F'], E:[], F:[] }, 'A');`,
        quiz: [
          {
            question: "BFS guarantees shortest path in?",
            options: [
              "Weighted graphs",
              "Unweighted graphs",
              "All graphs",
              "Trees only",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Interview Prep",
    icon: "🎯",
    topics: [
      {
        id: "dsa-complexity-analysis",
        title: "Complexity Analysis for Interviews",
        difficulty: "medium",
        shortDesc:
          "Analyze time & space complexity like an interviewer expects",
        theory: `<h3>Big-O in Interviews</h3><p>Every coding interview answer must include complexity analysis. Interviewers evaluate whether you can analyze your own solution correctly.</p><h3>Common Complexities</h3><ul><li><strong>O(1)</strong> — hash lookups, array access</li><li><strong>O(log n)</strong> — binary search</li><li><strong>O(n)</strong> — single pass</li><li><strong>O(n log n)</strong> — optimal sorting</li><li><strong>O(n²)</strong> — nested loops (usually red flag)</li><li><strong>O(2^n)</strong> — brute force recursion</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Tip</div>Always state both Time and Space complexity. If asked to optimize, reduce time first, then space.</div>`,
        codeExample: `// Complexity analysis examples
function example1(arr) {
  // O(n) time, O(1) space
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}

function example2(arr) {
  // O(n²) time, O(1) space — CAN WE DO BETTER?
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] === 10) console.log(arr[i], "+", arr[j]);
}

function example3(arr) {
  // O(n) time, O(n) space — optimized with hashmap!
  const seen = new Set();
  for (const num of arr) {
    if (seen.has(10 - num)) console.log(num, "+", (10 - num));
    seen.add(num);
  }
}

console.log("Brute force O(n²):");
example2([1, 3, 5, 7, 9, 2, 8]);
console.log("\\nOptimized O(n):");
example3([1, 3, 5, 7, 9, 2, 8]);`,
        quiz: [
          {
            question: "What is the time complexity of binary search?",
            options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
            answer: 1,
          },
          {
            question: "HashMap lookup is typically?",
            options: ["O(n)", "O(log n)", "O(1) amortized", "O(n²)"],
            answer: 2,
          },
          {
            question: "Interviewers prefer which approach?",
            options: [
              "Brute force only",
              "Optimal only",
              "Brute force first, then optimize",
              "Whatever works",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "dsa-problem-patterns",
        title: "Top Interview Patterns",
        difficulty: "hard",
        shortDesc: "Recognize and apply the 5 most common DSA patterns",
        theory: `<h3>Pattern Recognition</h3><p>Most interview questions map to a small set of patterns. Recognizing the pattern is half the battle.</p><h3>Top 5 Patterns</h3><ol><li><strong>Two Pointers / Sliding Window</strong> — sorted arrays, subarrays</li><li><strong>HashMap / Set</strong> — frequency, duplicates, two-sum</li><li><strong>BFS / DFS</strong> — trees, graphs, matrices</li><li><strong>Dynamic Programming</strong> — optimization, counting paths</li><li><strong>Binary Search</strong> — sorted data, search space</li></ol><div class="info-box"><div class="info-box-title">💡 Strategy</div>Ask: "Is the input sorted?" → Two Pointers / Binary Search. "Need frequency counts?" → HashMap. "Tree/graph traversal?" → BFS/DFS. "Optimize or count?" → DP.</div>`,
        codeExample: `// Pattern matching exercise
function identifyPattern(problem) {
  const patterns = {
    "sorted array + pair sum": "Two Pointers",
    "subarray with condition": "Sliding Window",
    "frequency / duplicates": "HashMap",
    "tree level order": "BFS",
    "all paths in graph": "DFS",
    "minimum coins to make change": "Dynamic Programming",
    "search in rotated sorted array": "Binary Search",
  };
  return patterns[problem] || "Unknown";
}

const problems = [
  "sorted array + pair sum",
  "subarray with condition",
  "frequency / duplicates",
  "tree level order",
  "all paths in graph",
  "minimum coins to make change",
  "search in rotated sorted array"
];

console.log("=== Pattern Matching Guide ===");
problems.forEach(p => {
  console.log(p + " → " + identifyPattern(p));
});`,
        quiz: [
          {
            question: "Finding pairs in a sorted array → pattern?",
            options: ["DP", "Two Pointers", "BFS", "HashMap"],
            answer: 1,
          },
          {
            question: "Counting unique paths in a grid → pattern?",
            options: [
              "Two Pointers",
              "BFS",
              "Dynamic Programming",
              "Binary Search",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "dsa-mock-walkthrough",
        title: "Mock Interview Walkthrough",
        difficulty: "hard",
        shortDesc: "Step-by-step solution of a real interview question",
        theory: `<h3>The UMPIRE Method</h3><ol><li><strong>U</strong>nderstand — clarify the problem, ask questions</li><li><strong>M</strong>atch — identify the pattern</li><li><strong>P</strong>lan — outline your approach in pseudocode</li><li><strong>I</strong>mplement — write clean code</li><li><strong>R</strong>eview — trace through examples, fix bugs</li><li><strong>E</strong>valuate — analyze time/space complexity</li></ol><h3>Example: "Find the longest substring without repeating characters"</h3><p>Pattern: <strong>Sliding Window + HashMap</strong></p>`,
        codeExample: `// MOCK INTERVIEW: Longest Substring Without Repeating Characters

// Step 1: UNDERSTAND
// Input: "abcabcbb" → Output: 3 ("abc")
// Input: "bbbbb" → Output: 1 ("b")
// Edge: "" → 0

// Step 2: MATCH — Sliding Window + Set

// Step 3: PLAN
// Use left/right pointers and a Set
// Expand right, if duplicate found, shrink left
// Track max window size

// Step 4: IMPLEMENT
function lengthOfLongestSubstring(s) {
  const seen = new Set();
  let left = 0, maxLen = 0;
  
  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// Step 5: REVIEW — trace through examples
console.log("'abcabcbb' →", lengthOfLongestSubstring("abcabcbb")); // 3
console.log("'bbbbb' →", lengthOfLongestSubstring("bbbbb")); // 1
console.log("'pwwkew' →", lengthOfLongestSubstring("pwwkew")); // 3
console.log("'' →", lengthOfLongestSubstring("")); // 0

// Step 6: EVALUATE
console.log("\\nTime: O(n), Space: O(min(n, charset))");`,
        quiz: [
          {
            question: "What should you do FIRST in an interview?",
            options: [
              "Start coding",
              "Ask clarifying questions",
              "Analyze complexity",
              "Write tests",
            ],
            answer: 1,
          },
          {
            question: "The UMPIRE 'M' stands for?",
            options: ["Memorize", "Match pattern", "Minimize", "Mock"],
            answer: 1,
          },
        ],
      },
      {
        id: "dsa-common-mistakes",
        title: "Common Interview Mistakes",
        difficulty: "medium",
        shortDesc: "Avoid pitfalls that cost offers",
        theory: `<h3>Top Interview Mistakes</h3><ul><li>❌ <strong>Jumping to code</strong> — always plan first</li><li>❌ <strong>Ignoring edge cases</strong> — empty arrays, single element, negative numbers</li><li>❌ <strong>Not communicating</strong> — talk through your thought process</li><li>❌ <strong>Over-engineering</strong> — start simple, optimize when asked</li><li>❌ <strong>Wrong data structure</strong> — know when to use hash vs array vs tree</li><li>❌ <strong>Off-by-one errors</strong> — carefully handle loop boundaries</li></ul><div class="info-box"><div class="info-box-title">💡 Pro Tip</div>Before coding, always ask: "What are the edge cases?" Then handle them explicitly.</div>`,
        codeExample: `// Common edge cases to always check
function robustSolution(arr, target) {
  // Edge case 1: empty input
  if (!arr || arr.length === 0) {
    console.log("Edge: empty array → return []");
    return [];
  }
  
  // Edge case 2: single element
  if (arr.length === 1) {
    console.log("Edge: single element →", arr[0] === target);
    return arr[0] === target ? [0] : [];
  }
  
  // Edge case 3: all same elements
  if (new Set(arr).size === 1) {
    console.log("Edge: all same elements");
  }
  
  // Edge case 4: negative numbers
  if (arr.some(x => x < 0)) {
    console.log("Edge: has negatives — affects sum-based approaches");
  }
  
  console.log("Input:", JSON.stringify(arr), "target:", target);
  console.log("Processing normally...");
  return arr.filter(x => x === target);
}

robustSolution([], 5);
robustSolution([3], 3);
robustSolution([2, 2, 2], 2);
robustSolution([-1, 3, -5, 7], 3);`,
        quiz: [
          {
            question: "What should you do before starting to code?",
            options: [
              "Ask about salary",
              "Discuss edge cases and plan",
              "Write comments",
              "Import libraries",
            ],
            answer: 1,
          },
          {
            question: "Off-by-one errors are common in?",
            options: [
              "String operations",
              "Loop boundaries",
              "Both A and B",
              "Neither",
            ],
            answer: 2,
          },
        ],
      },
      {
        id: "dsa-behavioral-tips",
        title: "Behavioral & Soft Skills",
        difficulty: "easy",
        shortDesc: "Communication and presentation during interviews",
        theory: `<h3>How to Present Your Solution</h3><ul><li>✅ <strong>Think aloud</strong> — share your reasoning process</li><li>✅ <strong>Start with brute force</strong> — show you can solve it, then optimize</li><li>✅ <strong>Write clean code</strong> — meaningful variable names, proper indentation</li><li>✅ <strong>Test your code</strong> — trace through an example manually</li><li>✅ <strong>Handle hints gracefully</strong> — interviewers WANT you to succeed</li></ul><h3>STAR Method for Behavioral</h3><p><strong>S</strong>ituation → <strong>T</strong>ask → <strong>A</strong>ction → <strong>R</strong>esult. Use this for "Tell me about a time when..." questions.</p>`,
        codeExample: `// Interview communication template
const interviewFlow = [
  "1. READ the problem carefully",
  "2. ASK clarifying questions:",
  "   - What's the input size? (affects complexity target)",
  "   - Are there duplicates? Is input sorted?",
  "   - What should I return for edge cases?",
  "3. DISCUSS approach before coding:",
  "   - 'I see this is a sliding window problem...'",
  "   - 'Brute force would be O(n²), but we can optimize...'",
  "4. CODE with clear variable names",
  "5. TEST with examples, including edge cases",
  "6. ANALYZE complexity: 'Time O(n), Space O(1)'"
];

console.log("=== Interview Communication Flow ===\\n");
interviewFlow.forEach(step => console.log(step));

console.log("\\n=== STAR Method Example ===");
console.log("S: Our API was timing out under load");
console.log("T: I needed to optimize the database queries");
console.log("A: Added Redis caching and query indexing");
console.log("R: Response time dropped from 3s to 200ms");`,
        quiz: [
          {
            question: "STAR stands for?",
            options: [
              "Start, Try, Attempt, Retry",
              "Situation, Task, Action, Result",
              "Study, Test, Apply, Review",
              "Solve, Think, Analyze, Report",
            ],
            answer: 1,
          },
          {
            question: "When receiving a hint from the interviewer, you should?",
            options: [
              "Ignore it",
              "Accept it gracefully and use it",
              "Ask for another hint",
              "Say you already knew that",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
];
