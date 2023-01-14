package fsega.project.carpartsshop.repository;

import fsega.project.carpartsshop.model.Car;
import org.springframework.stereotype.Repository;

@Repository
public interface CarRepository extends BaseRepository<Car, Long> {
}
