package org.example;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Step 1: Create a mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Step 2: Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Create the service using the mock
        MyService service = new MyService(mockApi);

        // Step 4: Call the service method
        String result = service.fetchData();

        // Step 5: Verify the result
        assertEquals("Mock Data", result);
    }
}
