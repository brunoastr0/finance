
DROP TRIGGER IF EXISTS balance_trigger;

CREATE TRIGGER IF NOT EXISTS balance_trigger
	AFTER INSERT 
    ON user_income
    BEGIN 
    	UPDATE user_balance SET balance_amount = balance_amount + NEW.income_amount, 
        created_at=DATETIME('NOW'),
        updated_at = DATETIME('NOW');
        
    END;







