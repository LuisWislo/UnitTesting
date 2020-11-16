import { LinkedList } from './list';

test('List size regular use-case', () => {
    let myList = new LinkedList();
    
    myList.add(3);
    myList.add(1);
    myList.add(4);
    myList.add(5);

    expect(myList.size()).toBe(4);
});

test('List must be empty after clearing', () => {
    let myList = new LinkedList();
    
    myList.add(3);
    myList.add(1);
    myList.add(4);
    myList.add(5);
    myList.clear();

    expect(myList.size()).toBe(0);

});

test('Confirm added item and increased list size.', () => {
    let myList = new LinkedList();
    let justAdded = myList.add("test");

    expect(justAdded).toBe("test");
    expect(myList.size()).toBe(1);
});

test('Check if item exists and expect false when it does not.', () => {
    let myList = new LinkedList();

    myList.add(3);
    myList.add(1);
    myList.add(4);
    myList.add(5);

    expect(myList.exists(3)).toBe(true);
    expect(myList.exists("imaginary")).toBe(false);

});

test('Get element by index.', () => {
    let myList = new LinkedList();

    myList.add(3);
    myList.add(1);
    myList.add(4);
    myList.add(5);

    expect(myList.get(1)).toBe(1);
    expect(myList.get(2)).toBe(4);
    expect(myList.get(4)).toBe(null);
});

test('Get index of matching object.', () => {
    let myList = new LinkedList();

    myList.add(3);
    myList.add(1);
    myList.add(4);
    myList.add(5);

    expect(myList.search(5)).toBe(3);
    expect(myList.search(10)).toBe(null);
    expect(myList.search(-1)).toBe(null);
    expect(myList.search(3)).toBe(0);

});

test('Removing item by index.', () => {
    let myList = new LinkedList();

    myList.add(3);
    myList.add(1);
    myList.add(4);
    myList.add(5);

    expect(myList.size()).toBe(4);

    let justRemoved = myList.remove(2);

    expect(justRemoved).toBe(4);
    expect(myList.size()).toBe(3);
    expect(myList.get(1)).toBe(1);
    expect(myList.get(2)).toBe(5);
    
});

