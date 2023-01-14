package fsega.project.carpartsshop.repository;

import fsega.project.carpartsshop.model.CarPart;
import org.springframework.stereotype.Repository;

@Repository
public interface CarPartRepository extends BaseRepository<CarPart, Long> {
}
