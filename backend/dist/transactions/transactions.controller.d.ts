import { TransactionsService } from './transactions.service';
import { Transaction } from './transaction.entity';
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    findAll(): Promise<Transaction[]>;
    create(transaction: Transaction): Promise<Transaction>;
}
