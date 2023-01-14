package fsega.project.carpartsshop.repository;

import fsega.project.carpartsshop.model.Invoice;
import fsega.project.carpartsshop.model.InvoiceKey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InvoiceRepository extends CrudRepository<Invoice, InvoiceKey> {
}
