﻿using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.RegularExpressions;

namespace Algorithm.DomainModels
{
    public class DistMatrix
    {
        [Key]
        public int Id { get; set; }
        public string Matrix { get; set; }
        public int N { get; set; }
       
        public string MatrixView
        {
            get
            {
                StringBuilder builder = new StringBuilder();
                int i = 0;
                foreach (var e in Regex.Split(Matrix, @" +"))
                {
                    i++;
                    if (i % N == 0)
                    {
                        builder.Append(e).Append("\r\n");
                        continue;
                    }
                    builder.Append(e).Append('\t');
                }
                return builder.ToString();
            }
        }

       
    }
}