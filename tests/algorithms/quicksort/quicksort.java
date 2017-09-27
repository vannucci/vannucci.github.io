class QuickSort
{

	int partition(int arr[], int left, int right) 
	{
		int i = left, j = right;
		int tmp;
		int pivot = arr[(left + right) / 2];

		while(i <= j) {
			while(arr[i] < pivot)
				i++;
			while(arr[j] > pivot)
				j--;
			if(i <= j) {
				tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				i++;
				j--;
			}
		};

		return i;

	}

	void sort(int arr[], int left, int right) 
	{
		int index = partition(arr,left,right);
		if(left < index - 1)
			sort(arr,left, index-1);
		if(index < right)
			sort(arr,index,right);

	}


	static void printArray(int arr[])
	{
		int n = arr.length;
		for(int i=0;i<n;i++)
			System.out.print(arr[i]+" ");
		System.out.println();
	}

	//Driver program
	public static void main(String args[])
	{
		int arr[] = {3,2,6,1,8,5,0,4};
		int n = arr.length;

		QuickSort ob = new QuickSort();
		ob.sort(arr, 0, n-1);

		System.out.println("Sorted array");
		printArray(arr);


	}

}

