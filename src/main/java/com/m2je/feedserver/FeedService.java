package com.m2je.feedserver;

import java.util.List;

import com.m2je.feedserver.model.Feed;

public interface FeedService {
	
	/**
	 * 
	 * @param ad
	 * @return
	 */
	public Feed create(Feed ad);
	
	/**
	 * 
	 * @param partnerId
	 * @return
	 */
	public List<Feed> list(); 
}
