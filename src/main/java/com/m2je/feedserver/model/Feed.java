package com.m2je.feedserver.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.m2je.feedserver.util.JacksonUtil;

@Table(name="feed")
@Entity
public class Feed implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4845046400389935354L;
	private Long id;
	private String content;
	private Date publishDate;
	
	@Id
	@Column(name="id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@NotNull
	@Column(name="content")
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	@Temporal(TemporalType.DATE)
	@Column(name="publish_date")
	@JsonSerialize(using = JacksonUtil.JacksonDateSerilizer.class)
    @JsonDeserialize(using = JacksonUtil.JacksonDateDeserilizer.class)
	public Date getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}
	
	
	
}
