import {Component} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
	@Component({
	  selector: 'teamtable',
	  styleUrls: ['./teamtable.component.css'],
	  templateUrl: './teamtable.component.html'
	})
	export class TeamtableComponent {

	settings = {
	  columns: {
	    tf: {
	      title: 'Team Founders',
	      filter: false,
	    },
	    tm: {
	      title: 'Team Members',
	      filter: false,
	    },
	    email: {
	      title: 'Email',
	      filter: false,
	    },
	    nm: {
	      title: 'Need Members?',
	      filter: false,
	    },
	    skills: {
	      title: 'Skills',
	      filter: false,
	    },
	    pd: {
	      title: 'Project Description',
	      filter: false,
	    },
	    mentor: {
	      title: 'Mentor',
	      filter: false,
	    },
	    status: {
	      title: 'Status',
	      filter: false,
	    },
	    pitch: {
	      title: 'Elevator Pitch',
	      filter: false,
	    },
	  },
	};

	data = [
	    {
	      tf: "John Doe",
	      tm: "Leanne Graham",
	      email: "Sincere@april.biz",
	      nm: "no",
	      skills: "html5",
	      pd: "Making a website.",
	      mentor: "None",
	      status: "idea",
	      pitch: "none",
	    },
	    {
	      tf: "Joe Doe",
	      tm: "Lea Graham",
	      email: "Since@april.biz",
	      nm: "yes",
	      skills: "css3",
	      pd: "Styling a website.",
	      mentor: "None",
	      status: "prototype",
	      pitch: "none",
	    },
    ];

	source: LocalDataSource; // add a property to the component

	constructor() {
	  this.source = new LocalDataSource(this.data); // create the source
	  
		
	}

	onSearch(query: string = '') {
		  this.source.setFilter([
		    // fields we want to include in the search
		    {
		      field: 'tf',
		      search: query,
		    },
		    {
		      field: 'tm',
		      search: query,
		    },
		    {
		      field: 'email',
		      search: query,
		    },
		    		    {
		    field: 'nm',
		      search: query,
		    },
		    {
		      field: 'skills',
		      search: query,
		    },
		    {
		      field: 'pd',
		      search: query,
		    },
		    {
		      field: 'mentor',
		      search: query,
		    },
		    {
		      field: 'status',
		      search: query,
		    },
		    {
		      field: 'pitch',
		      search: query,
		    },
		  ], false); 
		  // second parameter specifying whether to perform 'AND' or 'OR' search 
		  // (meaning all columns should contain search query or at least one)
		  // 'AND' by default, so changing to 'OR' by setting false here
		}
}