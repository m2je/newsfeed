package com.m2je.feedserver;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.m2je.feedserver.model.Feed;

@Repository("feedDAO")
public interface FeedDAO extends JpaRepository<Feed,Long>{
	
	
	@Query(value="SELECT feed FROM Feed Feed")
	public Page<Feed> find(Pageable pagination);


}
