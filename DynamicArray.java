package MinAndMaxFromArray;

public class DynamicArray {

	private int array[];
	private int count;
	private int size;

	public DynamicArray() {
		array = new int[1];
		count = 0;
		size = 1;
	}

	public void add(int element) {
		resize();
		array[count] = element;
		count++;
	}

	public void addAt(int index, int element) {
		resize();
		for (int from = count - 1; from >= index; from--) {
			array[from + 1] = array[from];
		}
		array[index] = element;
		count++;
	}

	public void removeAt(int index) {
		for (int from = index; from < count - 1; from++) {
			array[from] = array[from + 1];
		}
		array[count - 1] = 0;
		count--;
		shrink();
	}

	public void resize() {
		int tempArray[] = null;
		if (count == size) {
			tempArray = new int[size * 2];
			for (int i = 0; i < size; i++) {
				tempArray[i] = array[i];
			}
			array = tempArray;
			size = size * 2;
		}
	}

	public void shrink() {
		int tempArray[] = null;
		if (count == size / 2) {
			tempArray = new int[size / 2];
			for (int i = 0; i < count; i++) {
				tempArray[i] = array[i];
			}
			array = tempArray;
			size = size / 2;
		}
	}

	public void remove() {
		if (count > 0) {
			array[count - 1] = 0;
			count--;
		}
		shrink();
	}

	public static void main(String[] args) {
		DynamicArray a = new DynamicArray();
		System.out.println("Before insertion");
		System.out.println("count : " + a.count);
		System.out.println("size : " + a.size);
		a.add(2);
		a.add(3);
		a.add(4);
		a.add(5);
		a.add(6);
		a.addAt(1, 12);
		a.remove();
		a.removeAt(1);

		System.out.println("After insertion");
		for (int i = 0; i < a.count; i++) {
			System.out.println(a.array[i]);
		}
		System.out.println("count : " + a.count);
		System.out.println("size : " + a.size);

	}
}
