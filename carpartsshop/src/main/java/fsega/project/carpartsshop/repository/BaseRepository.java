package fsega.project.carpartsshop.repository;

import fsega.project.carpartsshop.model.BaseEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BaseRepository<T extends BaseEntity, Long> extends CrudRepository<T, Long> {
}
