﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AcademicInfo.Models;

public class Discipline
{
    [Key]
    public int DisciplineId { get; set; }
    [Required(ErrorMessage = "Name is required")]
    public string Name { get; set; }
    [Required(ErrorMessage = "Status is required")]
    public string IsOptional { get; set; }
    [Required(ErrorMessage = "Faculty is required")]
    [ForeignKey("Faculty")]
    public int? FacultyId { get; set; }

    public int NumberOfStudents { get; set; }
    public int MaxNumberOfStudents { get; set; }
    public int Year { get; set; }


}