module.exports = {
  someSidebar: {
    Main: ['z_index'],
    ActiveRecord: ['active_record/callbacks',
                   'active_record/distinct',
                   'active_record/eager_loading',
                   'active_record/include_vs_join',
                   'active_record/lazy_loading',
                   'active_record/migration',
                   'active_record/table_lock_during_migration'],
    Bundler: ['bundler/exec'],
    DataStructures: ['data_structures/arrays_method',
                     'data_structures/arrays',
                     'data_structures/collection_classes',
                     'data_structures/enumerable_module',
                     'data_structures/enumerator_class',
                      'data_structures/hash_syntax',
                      'data_structures/length_size_count',
                      'data_structures/map_or_hash',
                      'data_structures/queue',
                      'data_structures/set', 
                      'data_structures/sized_queue',
                      'data_structures/sorted_set',
                      'data_structures/stack'],
    DesignPatterns: ['design_patterns/_index',
                     'design_patterns/adapter',
                     'design_patterns/anti_patterns',
                     'design_patterns/decorator_pattern',
                     'design_patterns/mvc',
                     'design_patterns/separation_of_concerns',
                     'design_patterns/service_objects',
                     'design_patterns/single_responsibility_principle',
                     'design_patterns/singleton'],
    Gems: ['gems/dependency_conflict',
          'gems/rack',
          'gems/rake',
          'gems/reek',
            'gems/resque',
            'gems/retriable',
           'gems/zeitwerk'],
    Rails: [ { ApiMode: ['rails/api_mode/api_mode',
                         'rails/api_mode/build_json_api']},
              {CRUD: ['rails/crud/crud_verbs_actions']},
              { Routes: ['rails/routes/breaking_routes',
                       'rails/routes/member_vs_collection',
                       'rails/routes/namespace_vs_resources',
                       'rails/routes/routes',
                       'rails/routes/scope'
                      ]},
            'rails/before_action',
            'rails/callbacks',
            'rails/concerns',
            'rails/convention_over_configuration',
            'rails/generate_uml_diagram',
            'rails/HashWithIndifferent',
            'rails/i18n',
            'rails/middleware',
            'rails/observers',
            'rails/performance',
            'rails/polymorphic_association',
            'rails/rake',
            'rails/security',
            'rails/session',
            'rails/terminal_commands',
            'rails/to_webpacker'],
    Ruby: [{ Advanced: ['ruby/advanced/closures',
                        'ruby/advanced/lambda',
                        'ruby/advanced/meta_programming',
                        'ruby/advanced/proc'] },
           { Blocks: ['ruby/blocks/blocks',
                      'ruby/blocks/yield'] },
           { Cloning: ['ruby/cloning/clone',
                       'ruby/cloning/deep_copy',
                       'ruby/cloning/dup',
                       'ruby/cloning/shallow_copy',
                       'ruby/cloning/trivial_vs_no_trivial']},
            { Conditionals: ['ruby/conditionals/if_else_ruby',
                             'ruby/conditionals/lazy_evaluation_conditionals']},
            { Constants: ['ruby/constants/constants_on_object',
                          'ruby/constants/constants',
                          'ruby/constants/freeze',
                          'ruby/constants/frozen_string_literal',
                          'ruby/constants/frozen',
                          'ruby/constants/private_constant']},
           { Getter_Setter: ['ruby/getter_setter/attr_accessor',
                             'ruby/getter_setter/attr_reader',
                             'ruby/getter_setter/attr_writer',
                             'ruby/getter_setter/readme'] },
           { Instance_vs_Class: ['ruby/instance_vs_class/class_method',
                                 'ruby/instance_vs_class/class_variable',
                                 'ruby/instance_vs_class/instance_method',
                                 'ruby/instance_vs_class/instance_variable'] },
           { InterestingKeyWords: [
                                  'ruby/interesting_keywords/<=>',
                                  'ruby/interesting_keywords/||=',
                                  'ruby/interesting_keywords/=~',
                                  'ruby/interesting_keywords/bang',
                                  ] },
            { Loops: ['ruby/loops/each',
                     'ruby/loops/loop',
                     'ruby/loops/until',
                     'ruby/loops/while'] },
            { Memory: ['ruby/memory/garbage_collector',
                     'ruby/memory/how_ruby_uses_memory'] },
            { Methods: ['ruby/methods/double_splat',
                        'ruby/methods/kwargs',
                        'ruby/methods/params_ruby',
                        'ruby/methods/send',
                        'ruby/methods/single_splat',
                        'ruby/methods/ways_to_call_method',]},
            { Numerical: ['ruby/numerical/convert',
                          'ruby/numerical/float']},
            { OOPS: ['ruby/oops/class',
                     'ruby/oops/eigen_class',
                     'ruby/oops/evaluate_ruby_objects_as_boolean',
                      'ruby/oops/include_vs_extend',
                      'ruby/oops/include_vs_require',
                      'ruby/oops/inheritance',
                      'ruby/oops/lexical_scoping',
                      'ruby/oops/mixins',
                      'ruby/oops/module_nesting',
                      'ruby/oops/module_vs_class',
                      'ruby/oops/module',
                      'ruby/oops/object',
                      'ruby/oops/self',
                      'ruby/oops/singleton_class',
                      'ruby/oops/singleton_method',] },
           { Ruby_vs_Java: ['ruby/ruby_vs_java/increment_operators'] },
           { Sorting: ['ruby/sorting/custom_sort',
                       'ruby/sorting/sort_hash',
                       'ruby/sorting/sort_string',
                       'ruby/sorting/sort_vs_sort_by',
                       'ruby/sorting/sort',
                      ] },
           { Threads: ['ruby/threads/thread',
                       'ruby/threads/thread_pooling'] },
           {Typing: ['ruby/typing/duck_typing',
                     'ruby/typing/typed']},
          { Visibility: ['ruby/visibility/private_from_super_class',
                         'ruby/visibility/protected_from_super_class',
                         'ruby/visibility/public_from_super_class',
                         'ruby/visibility/visibility'] },
           "ruby/by_value_vs_by_ref",
           "ruby/comments",
           "ruby/documentation_in_command_line",
           "ruby/enum",
           "ruby/error",
           "ruby/print_puts_p",
           "ruby/rails_vs_ruby_methods",
           "ruby/symbol",
           "ruby/type_of_object"],
    Ruby_3: ['ruby_3/scalability'],
    RubyMethods: ['ruby_methods/collect',
                  'ruby_methods/delete_if',
                  'ruby_methods/each_slice',
                  'ruby_methods/eq_vs_eql',
                  'ruby_methods/lines',
                  'ruby_methods/map_vs_collect_vs_each',
                  'ruby_methods/reduce_and_inject',
                  'ruby_methods/select',
                  'ruby_methods/substring',
                  'ruby_methods/sum_of_numbers'],
    RubyVersionManager: ['ruby_version_manager/rvm'],
    Testing: ['testing/testing_private_methods'],
    EventualConsistency: ['eventual_consistency'],
    InterviewPrep: ['interview_prep'],
    Mistakes: ['mistakes_while_learning_rails'],
    Performance: ['performance'],
    ReloadConsole: ['reload_console'],
    Resources: ['z_resources/blogs',
                'z_resources/books',
                'z_resources/conference',
                'z_resources/online',
                'z_resources/forum',
                'z_resources/popular_rails_repo'],
  },
};
