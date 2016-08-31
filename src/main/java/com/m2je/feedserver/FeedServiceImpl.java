package com.m2je.feedserver;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;

import com.m2je.feedserver.model.Feed;

@Service
public class FeedServiceImpl implements FeedService {

	@Autowired
	private FeedDAO adDAO;
	
	@Override
	public Feed create(Feed feed) {
		return adDAO.save(feed);
	}

	

	@Override
	public List<Feed> list() {
		return adDAO.find( new PageRequest(0, 10, new Sort(new Order(Direction.DESC,"publishDate")))).getContent();
	}

}
