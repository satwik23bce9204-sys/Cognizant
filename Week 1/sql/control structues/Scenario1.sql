-- Scenario 1:
-- Apply a 1% discount to loan interest rates for customers above 60 years.

BEGIN
    FOR rec IN (
        SELECT LoanID
        FROM Loans
        WHERE CustomerID IN (
            SELECT CustomerID
            FROM Customers
            WHERE Age > 60
        )
    )
    LOOP
        UPDATE Loans
        SET InterestRate = InterestRate - 1
        WHERE LoanID = rec.LoanID;
    END LOOP;

    COMMIT;
END;
/
