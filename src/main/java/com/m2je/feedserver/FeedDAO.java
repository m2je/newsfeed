package com.m2je.feedserver;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.m2je.feedserver.model.Feed;

@Repository("feedDAO")
public interface FeedDAO extends JpaRepository<Feed,String>{
	
	
	@Query(value="SELECT feed FROM Ad Ad ")
	public Page<Feed> findByPartnerId(Pageable pagination);
}
