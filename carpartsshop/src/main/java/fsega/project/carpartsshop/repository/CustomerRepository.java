package fsega.project.carpartsshop.repository;

import fsega.project.carpartsshop.model.Customer;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CustomerRepository extends BaseRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);
}
