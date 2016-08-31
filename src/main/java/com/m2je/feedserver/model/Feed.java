package com.m2je.feedserver.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Table(name="feed")
@Entity
public class Feed implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -4845046400389935354L;
	private Long id;
	private Integer duration;
	private String content;
	private Date publishDate;
	@Id
	@Column(name="id")
	@NotBlank
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	@NotNull
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
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
	@JsonIgnore
	public Date getPublishDate() {
		return publishDate;
	}
	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}
	
	
	
}
