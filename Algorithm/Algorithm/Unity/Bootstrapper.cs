﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AntsLibrary.Classes;
using Grsu.Lab.Aoc.Contracts;
using Microsoft.Practices.Unity;
using Microsoft.Practices.Unity.Mvc;

namespace Algorithm.Unity
{
    public class Bootstrapper
    {
        public static IUnityContainer Initialise()
        {
            var container = BuildUnityContainer();
            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
            return container;
        }
        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();
            container.RegisterType<IAlgorithm, StandartAntAlgorithm>();
            container.RegisterType<IGraph, Graph>();
            MvcUnityContainer.Container = container;
            return container;
        }
    }  
}