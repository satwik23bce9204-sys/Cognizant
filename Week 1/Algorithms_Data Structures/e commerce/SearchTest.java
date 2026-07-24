public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(104, "Mouse", "Electronics"),
                new Product(101, "Laptop", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(102, "Book", "Education"),
                new Product(105, "Watch", "Accessories")

        };

        System.out.println("Linear Search:");

        Product p1 = SearchOperations.linearSearch(products, 103);

        if (p1 != null)
            p1.display();
        else
            System.out.println("Product not found");

        SearchOperations.sortProducts(products);

        System.out.println("\nBinary Search:");

        Product p2 = SearchOperations.binarySearch(products, 103);

        if (p2 != null)
            p2.display();
        else
            System.out.println("Product not found");
    }
}
